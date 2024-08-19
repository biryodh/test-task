class VulnerabilityScript {

    private  scriptId: number;
    private  dependencies: number[];

    constructor(scriptId: number, dependencies: number[]) {
        this.scriptId = scriptId;
        this.dependencies = dependencies;
    }

    public getScriptId(): number {
        return this.scriptId;
    }

    public getDependencies(): number[] {
        return this.dependencies;
    }
}

// Creating processess
let vulnerabilityScripts:VulnerabilityScript[] = [
    new VulnerabilityScript(1,[2,5]),
    new VulnerabilityScript(2,[5]),
    new VulnerabilityScript(3,[]),
    new VulnerabilityScript(4,[1]),
    new VulnerabilityScript(5,[3]),
];

let vScriptExecuted:number[]=[];

//Remove from List after execution 
function filterArray(Obj:VulnerabilityScript){
    let filteredArray:VulnerabilityScript[] = 
    vulnerabilityScripts.filter((script:VulnerabilityScript)=>script.getScriptId()!=Obj.getScriptId());
    return filteredArray;
}

function executeNonDependentScripts(Scripts:VulnerabilityScript[]){
    for( let element of Scripts){
        if(element.getDependencies().length==0){
            vScriptExecuted.push(element.getScriptId());
            vulnerabilityScripts = filterArray(element);
        }
    }
} 

// Execute First process 
executeNonDependentScripts(vulnerabilityScripts);

// Execute pending processes
let processCount = vulnerabilityScripts.length;

while(processCount!=0){
    for(let script of vulnerabilityScripts){
        let executedCount:number = 0;
        for(let item of script.getDependencies()){
                const index = vScriptExecuted.indexOf(item);
                if(index !== -1){
                    executedCount++
                }
        }
        if(executedCount===script.getDependencies().length){
            vScriptExecuted.push(script.getScriptId());
            vulnerabilityScripts = filterArray(script);
        }
    }
processCount--;
}
// displaying Ececuted scripts
console.log("Executed Order:",vScriptExecuted )

// displaying Unececuted scripts
if(vulnerabilityScripts.length!=0){
    console.log("Either circular dependency Or some scripts are missing" )
    console.log('Pending List: ',vulnerabilityScripts);
}
