//pages/index.js
import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import { Card,CardDeck ,CardColumns    } from 'react-bootstrap';

function LineInitfn() {
    if (typeof window !== "undefined") {

        liff
            .init({
                liffId: "1653935174-baeNzNDB" // Use own liffId
            })
            .then(() => {
                // Start to use liff's api
                if (!liff.isLoggedIn()) {
                    liff.login();
                  }
            })
            .catch((err) => {
                // Error happens during initialization
                console.log(err.code, err.message);
            });
    
    
      }

}




// const liff = window.liff;
const handleClick = (e) =>  {
    console.log(e)
}


const Index = ({musicData,profile}) => {
    // liff.getProfile()
    // .then(profile => {
    //     console.log(profile)
    // })
    // .catch((err) => {
    // console.log('error', err);
    
    // });
    return (
        <Layout>
            <div>
                <h1>{profile}</h1>
                <h3>Songs List</h3>
                <CardColumns>
                {musicData.map((item, i) => {
                   return (
                   <Card  key={i}  onClick={handleClick}>
                       {/* <Card.Img   src={item.poster_url} */}
                       <Card.Img variant="top" />
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.intro}</Card.Text>
                        <Card.Footer><small className="text-muted">{item.time_released}</small>  </Card.Footer>


                   </Card >
                   
                   )
               })}
                </CardColumns>
           
            </div>
        </Layout>
    );
}
Index.getInitialProps = async function() {
    const response = await fetch(`https://www.what-song.com/api/recent-movies`);
    const result = await response.json();
    LineInitfn();
     liff.getProfile()
    .then(profile => {

        return { musicData: result.data,profile:profile}

    })
    .catch((err) => {
    console.log('error', err);
    
    });

}


export default Index;