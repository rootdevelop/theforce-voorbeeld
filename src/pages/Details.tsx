import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSkeletonText } from '@ionic/react'

class Details extends React.Component {
    state = {
        id: 0,
        title: "",
        content: "",
        producer: "",
        director: "",
        releaseDate: ""
    }

    constructor(props: any) {
        super(props)

        this.setState({
            id: props.match.params.id
        })
    }

    componentDidMount = async () => {
        let result = await fetch("https://swapi.co/api/films/")
        let json = await result.json()

        let movie = json.results[this.state.id]

        this.setState({
            title: movie.title,
            director: movie.director,
            releaseDate: movie.release_date,
            content: movie.opening_crawl
        })
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons>
                            <IonBackButton color="dark" defaultHref="/" />
                        </IonButtons>
                        <IonTitle>{this.state.title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>
                                {this.state.releaseDate ? this.state.title : <IonSkeletonText animated style={{width: '40%'}}/>}
                            </IonCardSubtitle>
                            <IonCardTitle>
                                {this.state.title ? this.state.title : <IonSkeletonText animated style={{lineHeight: '18pt', width: '80%'}} />}
                            </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {this.state.content ? this.state.content : (
                                <p>
                                    <IonSkeletonText animated style={{ width: '60%' }} />
                                    <IonSkeletonText animated />
                                    <IonSkeletonText animated style={{ width: '88%' }} />
                                    <IonSkeletonText animated style={{ width: '70%' }} />
                                    <IonSkeletonText animated style={{ width: '60%' }} />
                                    <IonSkeletonText animated style={{ width: '88%' }} />
                                    <IonSkeletonText animated style={{ width: '70%' }} />
                                    <IonSkeletonText animated style={{ width: '60%' }} />
                                    <IonSkeletonText animated style={{ width: '88%' }} />
                                    <IonSkeletonText animated style={{ width: '70%' }} />
                                    <IonSkeletonText animated style={{ width: '60%' }} />
                                </p>
                            )}
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        )
    }

}

export default Details