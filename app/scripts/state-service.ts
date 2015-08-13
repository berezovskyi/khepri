module app {

  class State {
    constraints: { [id: string]: IConstraint } = {}
    filterConstraints : { [id: string]: IConstraint } = {}
  }

  export interface IConstraint {
    constraintString : string
    order : number
  }

  export class StateService {

    private state : State;

    constructor(private $rootScope : angular.IRootScopeService,$localStorage) {
      if (!$localStorage.state) $localStorage.state = new State();
      this.state = $localStorage.state;
    }

    private constraintString : string = "";
    private filterConstraintString : string = "";

    setConstraint(id : string, constraint : IConstraint) {
      this.state.constraints[id] = constraint;
      this.updateConstraintString();
    }

    setFilterConstraint(id : string, constraint: IConstraint) {
      this.state.filterConstraints[id]=constraint;
      this.updateFilterConstraintString();
    }

    private updateFilterConstraintString() {
      var orderedConstraints = []
      for (var id in this.state.filterConstraints) {
        if (!orderedConstraints[this.state.filterConstraints[id].order]) orderedConstraints[this.state.filterConstraints[id].order]=""
        orderedConstraints[this.state.filterConstraints[id].order]+=this.state.filterConstraints[id].constraintString
      }
      this.filterConstraintString=""
      orderedConstraints.filter(v => v).forEach(v => this.filterConstraintString+=v);
      this.$rootScope.$broadcast('updateFilterConstraint',this.filterConstraintString,this.state.filterConstraints)
    }

    private updateConstraintString() {
      var orderedConstraints = []
      for (var id in this.state.constraints) {
        if (!orderedConstraints[this.state.constraints[id].order]) orderedConstraints[this.state.constraints[id].order]=""
        orderedConstraints[this.state.constraints[id].order]+=this.state.constraints[id].constraintString
      }
      this.constraintString=""
      orderedConstraints.filter(v => v).forEach(v => this.constraintString+=v);
      this.$rootScope.$broadcast('updateConstraint',this.constraintString,this.state.constraints)
    }

    getConstraints() {
      return this.constraintString;
    }

    getFilterConstraints() {
      return this.filterConstraintString;
    }

  }

}
