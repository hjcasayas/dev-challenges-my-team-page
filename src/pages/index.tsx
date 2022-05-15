import type { NextPage } from "next";
import { TeammateCardComponent } from "../components/teammate-card.component";
import { team } from "../models/team.model";
import { ITeammate } from "../models/teammate.interface";

const Home: NextPage = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {team.map((teammate: ITeammate, index: number) => {
        return (
          <TeammateCardComponent
            {...teammate}
            index={index}
            key={teammate.src}
          ></TeammateCardComponent>
        );
      })}
    </div>
  );
};

export default Home;
