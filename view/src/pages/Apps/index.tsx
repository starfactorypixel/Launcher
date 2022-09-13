import * as React from "react";
import styles from "./style.scss";
import {Main} from "@pages/common/Main";
import {Group} from "./Group";

export default function Apps(): React.ReactElement {
    return <Main className={styles.apps}>
        <Group 
            name="Favorites" 
            apps={[
                {
                    name: "Brawl Stars",
                    icon: "/api/apps/7/icon.png",
                    background: "rgba(255, 190, 32, 0.8)",
                    color: "rgba(0, 0, 0, 0.8)"
                },
                {
                    name: "Yandex Navigator",
                    icon: "/api/apps/1/icon.png",
                    preview: "/api/apps/1/preview.png"
                },
                {
                    name: "Music",
                    icon: "/api/apps/2/icon.png",
                    preview: "/api/apps/2/preview.png"
                },
                {
                    name: "Telegram",
                    icon: "/api/apps/4/icon.png",
                    preview: "/api/apps/4/preview.png"
                },
                {
                    name: "Minecraft",
                    icon: "/api/apps/8/icon.png",
                    background: "rgba(125, 187, 77, 0.8)"
                },
                {
                    name: "Yandex Navigator",
                    icon: "/api/apps/1/icon.png",
                    preview: "/api/apps/1/preview.png"
                }
            ]}    
        />
        <Group 
            name="Applications"
            apps={[
                {
                    name: "YouTube",
                    icon: "/api/apps/5/icon.png",
                    preview: "/api/apps/5/preview.png"
                },
                {
                    name: "Settings",
                    icon: "/api/apps/6/icon.png",
                    preview: "/api/apps/6/preview.png"
                },
                {
                    name: "Yandex Navigator",
                    icon: "/api/apps/1/icon.png",
                    preview: "/api/apps/1/preview.png"
                },
                {
                    name: "Spotify",
                    icon: "/api/apps/3/icon.png",
                    preview: "/api/apps/3/preview.png"
                },
                {
                    name: "Telegram",
                    icon: "/api/apps/4/icon.png",
                    preview: "/api/apps/4/preview.png"
                },
                {
                    name: "Music",
                    icon: "/api/apps/2/icon.png",
                    preview: "/api/apps/2/preview.png"
                },
                {
                    name: "Yandex Navigator",
                    icon: "/api/apps/1/icon.png",
                    preview: "/api/apps/1/preview.png"
                },
                {
                    name: "Music",
                    icon: "/api/apps/2/icon.png",
                    preview: "/api/apps/2/preview.png"
                },
                {
                    name: "YouTube",
                    icon: "/api/apps/5/icon.png",
                    preview: "/api/apps/5/preview.png"
                },
                {
                    name: "YouTube",
                    icon: "/api/apps/5/icon.png",
                    preview: "/api/apps/5/preview.png"
                },
                {
                    name: "Settings",
                    icon: "/api/apps/6/icon.png",
                    preview: "/api/apps/6/preview.png"
                },
                {
                    name: "Yandex Navigator",
                    icon: "/api/apps/1/icon.png",
                    preview: "/api/apps/1/preview.png"
                },
                {
                    name: "Spotify",
                    icon: "/api/apps/3/icon.png",
                    preview: "/api/apps/3/preview.png"
                },
                {
                    name: "Telegram",
                    icon: "/api/apps/4/icon.png",
                    preview: "/api/apps/4/preview.png"
                },
                {
                    name: "Music",
                    icon: "/api/apps/2/icon.png",
                    preview: "/api/apps/2/preview.png"
                },
                {
                    name: "Yandex Navigator",
                    icon: "/api/apps/1/icon.png",
                    preview: "/api/apps/1/preview.png"
                },
                {
                    name: "Music",
                    icon: "/api/apps/2/icon.png",
                    preview: "/api/apps/2/preview.png"
                },
                {
                    name: "YouTube",
                    icon: "/api/apps/5/icon.png",
                    preview: "/api/apps/5/preview.png"
                },
                                {
                    name: "Settings",
                    icon: "/api/apps/6/icon.png",
                    preview: "/api/apps/6/preview.png"
                },
                {
                    name: "Yandex Navigator",
                    icon: "/api/apps/1/icon.png",
                    preview: "/api/apps/1/preview.png"
                },
                {
                    name: "Spotify",
                    icon: "/api/apps/3/icon.png",
                    preview: "/api/apps/3/preview.png"
                },
                {
                    name: "Telegram",
                    icon: "/api/apps/4/icon.png",
                    preview: "/api/apps/4/preview.png"
                },
                {
                    name: "Music",
                    icon: "/api/apps/2/icon.png",
                    preview: "/api/apps/2/preview.png"
                },
                {
                    name: "Yandex Navigator",
                    icon: "/api/apps/1/icon.png",
                    preview: "/api/apps/1/preview.png"
                },
                {
                    name: "Music",
                    icon: "/api/apps/2/icon.png",
                    preview: "/api/apps/2/preview.png"
                },
                {
                    name: "YouTube",
                    icon: "/api/apps/5/icon.png",
                    preview: "/api/apps/5/preview.png"
                },
                {
                    name: "Settings",
                    icon: "/api/apps/6/icon.png",
                    preview: "/api/apps/6/preview.png"
                },
                {
                    name: "Yandex Navigator",
                    icon: "/api/apps/1/icon.png",
                    preview: "/api/apps/1/preview.png"
                },
                {
                    name: "Spotify",
                    icon: "/api/apps/3/icon.png",
                    preview: "/api/apps/3/preview.png"
                },
                {
                    name: "Telegram",
                    icon: "/api/apps/4/icon.png",
                    preview: "/api/apps/4/preview.png"
                },
                {
                    name: "Music",
                    icon: "/api/apps/2/icon.png",
                    preview: "/api/apps/2/preview.png"
                },
                {
                    name: "Yandex Navigator",
                    icon: "/api/apps/1/icon.png",
                    preview: "/api/apps/1/preview.png"
                },
                {
                    name: "Music",
                    icon: "/api/apps/2/icon.png",
                    preview: "/api/apps/2/preview.png"
                }
            ]}
        />
    </Main>;
}