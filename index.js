var VulnerabilityScript = /** @class */ (function () {
    function VulnerabilityScript(scriptId, dependencies) {
        this.scriptId = scriptId;
        this.dependencies = dependencies;
    }
    VulnerabilityScript.prototype.getScriptId = function () {
        return this.scriptId;
    };
    VulnerabilityScript.prototype.getDependencies = function () {
        return this.dependencies;
    };
    return VulnerabilityScript;
}());
var vulnerabilityScripts = [
    new VulnerabilityScript(1, [2, 5]),
    new VulnerabilityScript(2, [5]),
    new VulnerabilityScript(3, []),
    new VulnerabilityScript(4, [1]),
    new VulnerabilityScript(5, [3]),
];
var vScriptExecuted = [];
//Remove from List after execution 
function filterArray(Obj) {
    var filteredArray = vulnerabilityScripts.filter(function (script) { return script.getScriptId() != Obj.getScriptId(); });
    return filteredArray;
}
function executeNonDependentScripts(Scripts) {
    for (var _i = 0, Scripts_1 = Scripts; _i < Scripts_1.length; _i++) {
        var element = Scripts_1[_i];
        if (element.getDependencies().length == 0) {
            vScriptExecuted.push(element.getScriptId());
            vulnerabilityScripts = filterArray(element);
        }
    }
}
// Execute First process 
executeNonDependentScripts(vulnerabilityScripts);
var processCount = vulnerabilityScripts.length;
while (processCount != 0) {
    for (var _i = 0, vulnerabilityScripts_1 = vulnerabilityScripts; _i < vulnerabilityScripts_1.length; _i++) {
        var script = vulnerabilityScripts_1[_i];
        var executedCount = 0;
        for (var _a = 0, _b = script.getDependencies(); _a < _b.length; _a++) {
            var item = _b[_a];
            var index = vScriptExecuted.indexOf(item);
            if (index !== -1) {
                executedCount++;
            }
        }
        if (executedCount === script.getDependencies().length) {
            vScriptExecuted.push(script.getScriptId());
            vulnerabilityScripts = filterArray(script);
        }
    }
    processCount--;
}
console.log("Executed Order:", vScriptExecuted);
if (vulnerabilityScripts.length != 0) {
    console.log("Either circular dependency Or some scripts are missing");
    console.log('Pending List: ', vulnerabilityScripts);
}
