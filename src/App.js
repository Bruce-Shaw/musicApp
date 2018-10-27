import { StackNavigator } from 'react-navigation';
import TabBar from "./pages/tabBar.js";
import Find from "./pages/find.js";
import Video from "./pages/video.js";

export default StackNavigator({
    TabBar: {
        screen: TabBar,
        navigationOptions: {
            header: null
        }
    },
    Find: {
        screen: Find,
        navigationOptions: {
            header: null
        }
    },
    Video: {
        screen: Video,
        navigationOptions: {
            header: null
        }
    },
})