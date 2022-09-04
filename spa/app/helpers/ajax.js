
export default async function ajax ( props ) {
    let { url, method, success} = props;

    try{
        let response = await fetch(url, {
            method: method,
            headers: { "content-type": "application/json" },
        });
        let data = await response.json();
        success( data );
        
    }catch(err){
        let message = err.statusText || 'Opss, Ocurrio un Error';
        
        document.getElementById('root').innerHTML = `
            <div class="error"> 
                <p>Error ${err.status}: ${message}</p>
            </div>  
        `;
        console.error(err);
    }
}