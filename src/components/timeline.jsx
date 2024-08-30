import React from "react";
import { Stepper, Step, Button, IconButton } from "@material-tailwind/react";
import {
  BookOpenText,
  Car,
  AirplaneLanding,
  Smiley,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function TimelineWithAvatar() {
  return (
    <div className="w-full px-4 py-8">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src="https://via.placeholder.com/150"
                alt="Early Settlement"
                withBorder
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              15th Century - Early Settlement
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600">
              The Igala people are believed to have settled in the area around
              the confluence of the Niger and Benue Rivers.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src="https://via.placeholder.com/150"
                alt="Rise of the Kingdom"
                withBorder
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              16th Century - Rise of the Kingdom
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600">
              The Igala Kingdom became a powerful entity in the region, known
              for its rich culture and strong leadership.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src="https://via.placeholder.com/150"
                alt="Colonial Era"
                withBorder
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              19th Century - Colonial Era
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600">
              During the colonial period, the Igala people experienced
              significant changes in their social and political structures.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src="https://via.placeholder.com/150"
                alt="Modern Day"
                withBorder
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              20th Century - Modern Day
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600">
              Today, the Igala people continue to preserve their rich heritage
              while embracing modernity.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
