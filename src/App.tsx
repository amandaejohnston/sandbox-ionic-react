import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonButtons, IonIcon, IonItem, IonList, IonPopover, setupIonicReact } from '@ionic/react'
import { ellipsisVertical } from 'ionicons/icons'
import { useState } from 'react'
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5])
  return <IonApp>
    <IonList>
      {items.map(item => <Item key={item} item={item} setItems={setItems} />)}
    </IonList>
  </IonApp>
}

const Item = ({ setItems, item }: { setItems: any, item: any }) => {
  const [event, setEvent] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  return <IonItem>
    item {item}
    <IonButtons slot="end">
      <IonButton onClick={(e) => {
        setEvent(e as any)
        setIsOpen(true)
      }}>
        <IonIcon icon={ellipsisVertical} slot="icon-only" />
      </IonButton>
    </IonButtons>
    <IonPopover event={event} isOpen={isOpen}>
      <IonItem onClick={() => {
        setEvent(null)
        setIsOpen(false)
        setItems((items: any) => items.filter((i: any) => item !== i))
      }} button>
        remove
      </IonItem>
    </IonPopover>
  </IonItem>
}

export default App;
