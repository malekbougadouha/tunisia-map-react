import type { FC } from "react";

import "./index.css";
import TunisiaMap from "@/lib/TunisiaMap/TunisiaMap";

const App: FC = () => {
    return (
        <div>
            <TunisiaMap width={200} strokeWidth={1} fillColor="#16f877" />
        </div>
    );
};

export default App;
