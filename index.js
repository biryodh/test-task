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
// Creating processess
// let vulnerabilityScripts:VulnerabilityScript[] = [
//     new VulnerabilityScript(1,[2]),
//     new VulnerabilityScript(2,[1,3]),
//     new VulnerabilityScript(3,[4]),
//     new VulnerabilityScript(4,[3,2]),
//     new VulnerabilityScript(5,[]),
// ];
//Remove from List after execution 
function filterArray(vulnerabilityScripts, Obj) {
    var filteredArray = vulnerabilityScripts.filter(function (script) { return script.getScriptId() != Obj.getScriptId(); });
    return filteredArray;
}
function executeNonDependentScripts(Scripts) {
    var vScriptExecuted = [];
    for (var _i = 0, Scripts_1 = Scripts; _i < Scripts_1.length; _i++) {
        var element = Scripts_1[_i];
        if (element.getDependencies().length == 0) {
            vScriptExecuted.push(element.getScriptId());
            Scripts = filterArray(Scripts, element);
        }
    }
    return vScriptExecuted;
}
// Execute First process 
//executeNonDependentScripts(vulnerabilityScripts);
// Execute pending processes
function executeProcess(vulnerabilityScripts, vScriptExecuted) {
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
                vulnerabilityScripts = filterArray(vulnerabilityScripts, script);
            }
        }
        processCount--;
    }
    return vScriptExecuted;
}
// displaying Ececuted scripts
//console.log("Executed Order:",vScriptExecuted )
// displaying Unececuted scripts
// if(vulnerabilityScripts.length!=0){
//     console.log("Either circular dependency Or some scripts are missing" )
//     console.log('Pending List: ',vulnerabilityScripts);
// }
