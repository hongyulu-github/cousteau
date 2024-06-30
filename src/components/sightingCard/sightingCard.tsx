import { Badge, Button, Card, Group, Image, Input, Text } from "@mantine/core";
import { t } from "../../utils/utils";
import { Sighting } from "../../types";

type SightingCardProps = {
  sighting: Sighting;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setClickedSighting: (sighting: Sighting) => void;
};

type onClickSightingCardProps = {
  sighting: Sighting;
  event: React.MouseEvent;
};

export function SightingCard({
  sighting,
  open,
  close,
  toggle,
  setClickedSighting,
}: SightingCardProps) {
  const onClickSightingCard = ({
    sighting,
    event,
  }: onClickSightingCardProps) => {
    toggle();
    setClickedSighting(sighting);
  };

  const renderCardContent = (sighting: Sighting) => {
    const isNewSighting = sighting.id === 0;
    if (!isNewSighting) {
      return (
        <>
          <Card.Section>
            <Image
              src={sighting.photoUrl}
              height={230}
              alt={sighting.observationState}
            />
          </Card.Section>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{sighting.userId}</Text>

            <Badge color="blue">{sighting.town}</Badge>
          </Group>
          <Text size="sm" c="dimmed">
            {sighting.observationState}
          </Text>
        </>
      );
    } else {
      return (
        <>
          <Card.Section>
            <Image
              height={230}
              fallbackSrc="https://placehold.co/600x400?text=..."
            />
          </Card.Section>
          <div className="flexCenter">
            <Button variant="filled">{t("addNewSighting")}</Button>
          </div>
        </>
      );
    }
  };
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      w={300}
      h={360}
      onClick={(event) => onClickSightingCard({ sighting, event })}
    >
      {renderCardContent(sighting)}
    </Card>
  );
}
