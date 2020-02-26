import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonLoading } from '@ionic/react';
import React from 'react'
import './Home.css'

class Home extends React.Component {

  title: string = "The Force"
  
  state = {
    films: [],
    isLoading: true
  }

  componentDidMount = async () => {
    let result = await fetch("https://swapi.co/api/films/")
    if (!result.ok) return;
    
    let json = await result.json();

    this.setState({
      films: json.results,
      isLoading: false
    });
  }

  render() {
    return (<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{this.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading isOpen={this.state.isLoading} />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{this.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {this.state.films.map((movie: any, index: number) =>
              <IonItem routerLink={"/details/" + index}>
                  <IonLabel>
                    <h2>{movie.title}</h2>
                    <p>Release date: {movie.release_date}</p>
                  </IonLabel>
              </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>)
  }
}

export default Home;
