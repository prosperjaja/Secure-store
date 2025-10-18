import { Drawer } from "@mantine/core";
import { ReactNode, createContext, useState } from "react";

export interface IDrawerContext {
  setDrawerState: React.Dispatch<React.SetStateAction<IDrawerState>>;
  drawerState: IDrawerState;
  close: () => void;
  size?: number;
}

interface IDrawerState {
  opened: boolean;
  component: null | ReactNode;
  id?: null | string | number;
  onClose?: () => void;
  size?: number | string;
  position?: "left";
}

export const DrawerContext = createContext<IDrawerContext | null>(null);
const initialvalues = {
  opened: false,
  component: null,
  id: null,
  onclose: () => {},
};
function DrawerProvider({ children }: { children: ReactNode }) {
  const [drawerState, setDrawerState] = useState<IDrawerState>(initialvalues);
  const close = () => {
    setDrawerState(initialvalues);
  };
  return (
    <DrawerContext.Provider value={{ setDrawerState, close, drawerState }}>
      <Drawer.Root
        opened={drawerState.opened}
        onClose={close}
        position={drawerState.position ?? "right"}
        className="relative"
        offset={8}
        radius="md"
        transitionProps={{
          transition: "rotate-left",
          duration: 150,
          timingFunction: "linear",
        }}
        size={drawerState.size}
      >
        <Drawer.Overlay className="flex">
          {/* <div className="w-[52px] h-[52px] bg-white rounded-full grid place-content-center absolute left-[65vw] self-center cursor-pointer">
            <IoMdClose size={24} color="#5E606A" />
          </div> */}
        </Drawer.Overlay>

        <Drawer.Content className="flex w-full">
          <Drawer.Body className="h-full flex flex-1 flex-col overflow-auto p-0 no-scrollbar">
            {drawerState.component}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      {children}
    </DrawerContext.Provider>
  );
}

export default DrawerProvider;
