import type { FC } from "react";

import "./index.css";
import TunisiaMap from "@/lib/TunisiaMap/TunisiaMap";

const App: FC = () => {
    return (
        <div>
            <TunisiaMap />
        </div>
    );
};

export default App;
