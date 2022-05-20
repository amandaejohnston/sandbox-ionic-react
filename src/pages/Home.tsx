import { IonButton, IonContent, IonItem, IonLabel, IonList, IonPage, IonPopover } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton id="nested-button">Click to open popover</IonButton>
        <IonPopover trigger="nested-button" dismissOnSelect={true}>
          <IonContent>
            <IonList>
              <IonItem button={true} detail={false}>
                <IonLabel>Option 1</IonLabel>
              </IonItem>
              <IonItem button={true} detail={false}>
                <IonLabel>Option 2</IonLabel>
              </IonItem>
              <IonItem button={true} detail={true} id="nested-trigger">
                <IonLabel>More options...</IonLabel>
              </IonItem>

              <IonPopover trigger="nested-trigger" dismissOnSelect={true} side="end">
                <IonContent>
                  <IonItem button={true}>
                    <IonLabel>Nested Option</IonLabel>
                  </IonItem>
                </IonContent>
              </IonPopover>
            </IonList>
          </IonContent>
        </IonPopover>
      </IonContent>
    </IonPage>
  );
};

export default Home;
