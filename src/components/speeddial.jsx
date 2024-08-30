import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Book, ClockCounterClockwise,  HouseLine, Plus,  } from "@phosphor-icons/react";

export function SpeedDiall() {
  return (
    <div className="relative h-8  w-full z-50 md:hidden ">
      <div className="fixed bottom-3 right-3">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full" color="cyan">
              <Plus className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <Link to={"/"}>
              <SpeedDialAction>
                <HouseLine className="h-5 w-5 text-gray-900" />
              </SpeedDialAction>
            </Link>
            <Link to={"/learn"}>
              <SpeedDialAction>
                <Book className="h-5 w-5 text-gray-900" />
              </SpeedDialAction>
            </Link>
            <Link to={"/history"}>
              <SpeedDialAction>
                <ClockCounterClockwise className="h-5 w-5 text-gray-900" />
              </SpeedDialAction>
            </Link>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
