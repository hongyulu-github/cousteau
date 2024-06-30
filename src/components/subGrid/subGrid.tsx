import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
  Grid,
  ScrollArea,
  Group,
  Button,
  Modal,
  // useMantineTheme,
  // px,
} from "@mantine/core";
import { SightingCard } from "../sightingCard/sightingCard";
import { SightingDetail } from "../sightingDetail/sightingDetail";

import { IconArrowRight, IconDownload, IconPhoto } from "@tabler/icons-react";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { t } from "../../utils/utils";
import { Sighting } from "../../types";
{
  /* <Skeleton height={height} radius="md" animate={false} /> */
}

const sightingListMock = [
  {
    id: 1111,
    speciesId: 1112,
    species: {
      speciesId: 2222,
      name: "string",
      scientificName: "string",
      categoryId: 212,
      family: "string",
    },
    date: 1714669969000,
    createDate: 1714669969000,
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    photoUrl:
      "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D",
    town: "string",
    province: "string",
    observationState: "string",
    userId: 3323,
    users: {
      userId: 444545,
      userName: "string",
      pwd: "string",
      name: "string",
      photoUrl:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    },
  },
  {
    id: 11133,
    speciesId: 1112,
    species: {
      speciesId: 2222,
      name: "string",
      scientificName: "string",
      categoryId: 212,
      family: "string",
    },
    date: 1714669969000,
    createDate: 1714669969000,
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    photoUrl:
      "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D",
    town: "string",
    province: "string",
    observationState: "string",
    userId: 3323,
    users: {
      userId: 444545,
      userName: "string",
      pwd: "string",
      name: "string",
    },
  },
];

export function Subgrid() {
  const [opened, { open, close, toggle }] = useDisclosure(false);
  const [sightingList, setSightingList] = useState(sightingListMock);
  // const [newSighting, setNewSighting] = useState({
  //   id: "",
  //   speciesId: "",
  //   date: 0,
  //   createDate: 0,
  //   coordinates: { latitude: 0, longitude: 0 },
  //   photoUrl: "",
  //   town: "",
  //   province: "",
  //   observations: "",
  //   userId: "userId",
  // });
  const [clickedSighting, setClickedSighting] = useState<Sighting | undefined>(
    undefined
  );

  return (
    <Container size={"100%"} h={"100vh"} pt={"xs"} pl={"10%"}>
      <ScrollArea w={"100%"} h={"100%"} scrollbars="y">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
          {
            // <div key={"newSighting"}>
            //   {SightingCard({
            //     sighting: newSighting,
            //     open: open,
            //     close: close,
            //     toggle: toggle,
            //     setClickedSighting: setClickedSighting,
            //   })}
            // </div>
          }
          {sightingList.map((sighting, i) => (
            <div key={i}>
              {SightingCard({
                sighting: sighting,
                open: open,
                close: close,
                toggle: toggle,
                setClickedSighting: setClickedSighting,
              })}
            </div>
          ))}
        </SimpleGrid>
      </ScrollArea>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        size={550}
      >
        {clickedSighting && (
          <SightingDetail
            sighting={clickedSighting}
            sightingList={sightingList}
            setSightingList={setSightingList}
            close={close}
          />
        )}
      </Modal>
    </Container>
  );
}
