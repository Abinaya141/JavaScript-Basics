var destinationGroup = "Kerala-Tourism";
var destinations = ["Munnar", "Varkala", "Wayanad"];
var fullGroupName = "Explore " + destinationGroup;

function places() {
  console.log("Tourist Group: " + fullGroupName);
  console.log("Destinations:");
  for (var i = 0; i < destinations.length; i++) {
    console.log("- " + destinations[i]);
  }
}

// Global Execution Contet :

// Creation Phase

GlobalExecutionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      destinationGroup: undefined,
      destinations: undefined,
    },
    outer: "null",
    ThisBinding: "window object",
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      fullGroupName: undefined,
    },
    outer: "null",
    ThisBinding: "window object",
  },
};

// Execution Phase

GlobalExecutionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      destinationGroup: "Kerala-Tourism",
      destinations: ["Munnar", "Varkala", "Wayanad"],
    },
    outer: "null",
    ThisBinding: "window object",
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      fullGroupName: "Explore " + "Kerala-Tourism",
    },
    outer: "null",
    ThisBinding: "window object",
  },
};

// Function Execution Context :

// Creation Phase

FunctionExecutionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      destinationGroup: undefined,
      destinations: undefined,
      i: undefined,
    },
    outer: "GlobalExecutionContext",
    ThisBinding: "places",
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      fullGroupName: undefined,
    },
    outer: "GlobalExecutionContext",
    ThisBinding: "places",
  },
};

// Execution Phase

FunctionExecutionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      destinationGroup: "Kerala-Tourism",
      destinations: ["Munnar", "Varkala", "Wayanad"],
      i: undefined,
    },
    outer: "GlobalExecutionContext",
    ThisBinding: "places",
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      fullGroupName: "Explore" + "Kerala-Tourism",
    },
    outer: "GlobalExecutionContext",
    ThisBinding: "places",
  },
};
