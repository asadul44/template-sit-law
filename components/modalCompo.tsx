import { useState } from "react";
import { Button, Modal } from "flowbite-react";

export function DefaultModal() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal("default")}>
        Toggle modal
      </Button>
    </>
  );
}
