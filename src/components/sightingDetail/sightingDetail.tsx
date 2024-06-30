import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  FileInput,
  FileInputProps,
  Group,
  Image,
  NativeSelect,
  Paper,
  Pill,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Title,
  rem,
  useMantineTheme,
} from "@mantine/core";
import {
  DateInput,
  DatePickerInput,
  DateTimePicker,
  DatesProvider,
} from "@mantine/dates";

import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";

import classes from "./sightingDetail.module.css";

import { useState } from "react";
import { t } from "../../utils/utils";
import { Sighting } from "../../types";

type SightingDetailProps = {
  sighting: Sighting;
  sightingList: Sighting[];
  setSightingList: (sightingList: Sighting[]) => void;
  close: () => void;
};

export function SightingDetail({
  sighting,
  sightingList,
  setSightingList,
  close,
}: SightingDetailProps) {
  const isNewSighting = sighting.id === 0;
  const [sightingDetail, setSightingDetail] = useState(sighting);
  const [isEditing, setIsEditing] = useState(false);

  const ValueComponent: FileInputProps["valueComponent"] = ({ value }) => {
    if (value === null) {
      return null;
    }

    if (Array.isArray(value)) {
      return (
        <Pill.Group>
          {value.map((file, index) => (
            <Pill key={index}>{file.name}</Pill>
          ))}
        </Pill.Group>
      );
    }

    return <Pill>{value.name}</Pill>;
  };

  const handleClickSaveBtn = () => {
    if (!isNewSighting) {
      const index = sightingList.findIndex((s) => s.id === sighting.id);
      if (index !== -1) {
        const updatedSightingList = [...sightingList];
        updatedSightingList[index] = sightingDetail;

        setSightingList(updatedSightingList);
      }
    } else {
      setSightingList([sighting, ...sightingList]);
    }
    close();
  };

  const renderEditSighting = (
    <div>
      <DatePickerInput
        valueFormat="DD/MM/YYYY"
        label={t("date")}
        placeholder="Date input"
        withAsterisk
        value={sightingDetail.date ? new Date(sightingDetail.date) : new Date()}
        onChange={(event) =>
          setSightingDetail({
            ...sightingDetail,
            date: event ? event.getTime() : 0,
          })
        }
      />
      <TextInput
        radius="md"
        label={t("town")}
        withAsterisk
        value={sightingDetail.town}
        onChange={(event) =>
          setSightingDetail({ ...sightingDetail, town: event?.target.value })
        }
      />
      <TextInput
        radius="md"
        label={t("province")}
        withAsterisk
        value={sightingDetail.province}
        onChange={(event) =>
          setSightingDetail({
            ...sightingDetail,
            province: event?.target.value,
          })
        }
      />
      <NativeSelect
        value={sightingDetail.speciesId}
        label={t("chooseSpecies")}
        withAsterisk
        onChange={(event) =>
          setSightingDetail({
            ...sightingDetail,
            speciesId: Number(event.currentTarget.value),
          })
        }
        data={["React", "Angular", "Svelte", "Vue"]}
      />
      <FileInput
        clearable
        withAsterisk
        label={t("uploadPhoto")}
        accept="image/png,image/jpeg"
        valueComponent={ValueComponent}
      />
      <Textarea
        label={t("observations")}
        autosize
        minRows={2}
        maxRows={4}
        value={sightingDetail.observationState}
        onChange={(event) =>
          setSightingDetail({
            ...sightingDetail,
            observationState: event.currentTarget.value,
          })
        }
      />
      <Divider my="md" />
      <Button
        className="alighRight marginTopBottom"
        variant="filled"
        onClick={handleClickSaveBtn}
      >
        {sightingDetail.id ? t("save") : t("create")}
      </Button>
    </div>
  );

  const theme = useMantineTheme();

  const renderShowSighting = (
    <div className="flexCenter ">
      <Card withBorder radius="md" className={classes.card} w={500}>
        <Card.Section>
          <Image
            src={sighting.photoUrl}
            alt="Top 50 underrated plants for house decoration"
            height={500}
          />
        </Card.Section>

        <Badge w="fit-content" variant="light">
          {sighting.town}
        </Badge>

        <Text fw={700} className={classes.title} mt="xs">
          {sighting.description}
        </Text>

        <Group mt="lg">
          <Avatar src={sighting.users.photoUrl} radius="sm" />
          <div>
            <Text fw={500}>{sighting.users.userName}</Text>
            <Text fz="xs" c="dimmed">
              posted 34 minutes ago
            </Text>
          </div>
        </Group>

        <Card.Section className={classes.footer}>
          <Group justify="space-between">
            <Text fz="xs" c="dimmed">
              733 people liked this
            </Text>
            <Group gap={0}>
              <ActionIcon variant="subtle" color="gray">
                <IconHeart
                  style={{ width: rem(20), height: rem(20) }}
                  color={theme.colors.red[6]}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray">
                <IconBookmark
                  style={{ width: rem(20), height: rem(20) }}
                  color={theme.colors.yellow[6]}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray">
                <IconShare
                  style={{ width: rem(20), height: rem(20) }}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          </Group>
        </Card.Section>
      </Card>
    </div>
  );

  return isEditing ? renderEditSighting : renderShowSighting;
}
