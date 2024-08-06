function safetyChecker(x) {
    console.log("Detection code is working")
    setTimeout(() => { 
       // let url = location.href.split(":")[0]; // Assuming security_key is a string
    
       let url = x
        let security_key = "AL12008"
    
        import(`./clients/${url}.js`) // Assuming the function name matches the file name
            .then(module => {
                // Use the imported function here
                let customer_security_key = module.default(); // Assuming a default export
                if (security_key !== customer_security_key) {
                    document.querySelector('body').innerHTML = ''
                } else {
                    return
                }
            })
            .catch(error => {
                console.error("Import failed:", error);
            });
    }, 2000);
}

export default safetyChecker
