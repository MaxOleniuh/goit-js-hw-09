const o=new Promise(((o,e)=>{setTimeout((()=>{o()}),2e3)}));o.then((e=>{console.log(o),console.log("Success")})).then((o=>{console.log("Result")})).catch((e=>{console.log(o),console.log("Error")})).finally((o=>{console.log("The end!")}));
//# sourceMappingURL=03-promises.ce15608c.js.map
