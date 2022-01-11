import { IonButton, IonButtons, IonIcon, IonItem, IonPopover } from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";

export const Item = ({ setItems, item }: any) => {
  const popoverTrigger = `openPopover-${item}`;

  return (
    <IonItem>
      Item {item}
      <IonButtons slot="end">
        <IonButton id={popoverTrigger}>
          <IonIcon icon={ellipsisVertical} slot="icon-only" />
        </IonButton>
      </IonButtons>
      <IonPopover trigger={popoverTrigger}>
        <IonItem onClick={() => {
          setItems((items: any[]) => items.filter(i => item !== i))
        }} button>Remove</IonItem>
      </IonPopover>
    </IonItem>
  )
};