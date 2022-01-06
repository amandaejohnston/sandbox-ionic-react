import { IonButton, IonContent, IonModal, useIonModal } from "@ionic/react";
import { Modal2 } from "./Modal2";

export const Modal: React.FC<{
  onDismiss: () => void;
}> = ({ onDismiss }) => {
  const [showHookModal] = useIonModal(Modal2);

  return (
    <IonContent>
      Modal 1
      <IonButton id="open-modal">Open Nested Modal (Inline)</IonButton>
      <IonButton onClick={() => showHookModal()}>Open Nested Modal (Hook)</IonButton>
      <IonButton onClick={() => onDismiss()}>Dismiss</IonButton>

      <IonModal trigger="open-modal">
        <IonContent>
          Nested Modal (Inline)
        </IonContent>
      </IonModal>
    </IonContent>
  )
};