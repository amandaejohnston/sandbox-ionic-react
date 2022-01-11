import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Item } from '../components/Item';
import './Home.css';

const Home: React.FC = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Popover in Deleted Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {items.map(item => <Item key={item} item={item} setItems={setItems} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
