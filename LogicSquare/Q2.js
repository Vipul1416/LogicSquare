

async function myFunction()
{

async function fetchExam(){
    try {
        const response = await fetch(`https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json`, {
            method: 'GET',
            credentials: 'same-origin'
        });
        const exam = await response.json();
        return exam;
    } catch (error) {
        console.error(error);
    }
}
async function fetchExams(){
    try {
        const response = await fetch(`https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json`, {
            method: 'GET',
            credentials: 'same-origin'
        });
        const exam = await response.json();
        return exam;
    } catch (error) {
        console.error(error);
    }
}

async function findCaliforniaCafes(a) {
    // You can store the given arrays in 2 internal variables
    var brands = await fetchExam();
    brands=brands.cafes;
  
    
    ;
    var articles = await fetchExams();
    articles=articles.places;
    
        
    ;
    //  Your code goes here
    articles.forEach(function(article) {
        var result = brands.filter(function(brand) {
            return brand.location_id === article.id;
            
        });
        article.name = (result[0] !== undefined) ? result[0].name : null;
        
    });
    
    const b=articles.filter((c)=>{
        var d=c.name;
        if(d!=null)
        {
            var f= d.toLowerCase();
            return(f.startsWith(a.toLowerCase()));
        }
       
       
        

    });

    document.getElementById('tbody').innerHTML=JSON.stringify(b);

};
     var x = document.getElementById("searching").value;
     findCaliforniaCafes(x);
    
     
     
     
    
     
    
     
     
};

