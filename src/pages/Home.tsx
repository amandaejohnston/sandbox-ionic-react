import { IonButton, IonContent, IonHeader, IonPage, IonPopover, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Popover - Position</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="grid">
          <div className="grid-item">
            <h2>Top, Start</h2>
            <IonButton id="top-start">Click to Open</IonButton>
            <IonPopover className="top-start-popover" trigger="top-start" side="top" alignment="start">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Top, Center</h2>
            <IonButton id="top-center">Click to Open</IonButton>
            <IonPopover className="top-center-popover" trigger="top-center" side="top" alignment="center">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Top, End</h2>
            <IonButton id="top-end">Click to Open</IonButton>
            <IonPopover className="top-end-popover" trigger="top-end" side="top" alignment="end">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Right, Start</h2>
            <IonButton id="right-start">Click to Open</IonButton>
            <IonPopover className="right-start-popover" trigger="right-start" side="right" alignment="start">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Right, Center</h2>
            <IonButton id="right-center">Click to Open</IonButton>
            <IonPopover className="right-center-popover" trigger="right-center" side="right" alignment="center">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Right, End</h2>
            <IonButton id="right-end">Click to Open</IonButton>
            <IonPopover className="right-end-popover" trigger="right-end" side="right" alignment="end">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Bottom, Start</h2>
            <IonButton id="bottom-start">Click to Open</IonButton>
            <IonPopover className="bottom-start-popover" trigger="bottom-start" side="bottom" alignment="start">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Bottom, Center</h2>
            <IonButton id="bottom-center">Click to Open</IonButton>
            <IonPopover className="bottom-center-popover" trigger="bottom-center" side="bottom" alignment="center">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Bottom, End</h2>
            <IonButton id="bottom-end">Click to Open</IonButton>
            <IonPopover className="bottom-end-popover" trigger="bottom-end" side="bottom" alignment="end">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Left, Start</h2>
            <IonButton id="left-start">Click to Open</IonButton>
            <IonPopover className="left-start-popover" trigger="left-start" side="left" alignment="start">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Left, Center</h2>
            <IonButton id="left-center">Click to Open</IonButton>
            <IonPopover className="left-center-popover" trigger="left-center" side="left" alignment="center">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Left, End</h2>
            <IonButton id="left-end">Click to Open</IonButton>
            <IonPopover className="left-end-popover" trigger="left-end" side="left" alignment="end">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Start, Start</h2>
            <IonButton id="start-start">Click to Open</IonButton>
            <IonPopover className="start-start-popover" trigger="start-start" side="start" alignment="start">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Start, Center</h2>
            <IonButton id="start-center">Click to Open</IonButton>
            <IonPopover className="start-center-popover" trigger="start-center" side="start" alignment="center">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>Start, End</h2>
            <IonButton id="start-end">Click to Open</IonButton>
            <IonPopover className="start-end-popover" trigger="start-end" side="start" alignment="end">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>End, Start</h2>
            <IonButton id="end-start">Click to Open</IonButton>
            <IonPopover className="end-start-popover" trigger="end-start" side="end" alignment="start">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>End, Center</h2>
            <IonButton id="end-center">Click to Open</IonButton>
            <IonPopover className="end-center-popover" trigger="end-center" side="end" alignment="center">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>

          <div className="grid-item">
            <h2>End, End</h2>
            <IonButton id="end-end">Click to Open</IonButton>
            <IonPopover className="end-end-popover" trigger="end-end" side="end" alignment="end">
              <IonContent className="ion-padding">Hello</IonContent>
            </IonPopover>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
