import React, {useEffect} from "react";
import {runInAction} from "mobx";
import {observer, useLocalObservable} from "mobx-react";
import {Page} from "@pages/common/Page";
import {App, Group} from "./Group";
import styles from "./style.scss";

export interface AppsStore {
    apps: App[];
    favorites: App[];
    loaded: boolean;
}

export const AppsPage: React.FC = observer(() => {
    const store = useLocalObservable<AppsStore>(() => ({
        apps: [],
        favorites: [],
        loaded: false
    }));
    const {apps, favorites, loaded} = store;

    useEffect(() => {
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            runInAction(() => {
                store.apps = [
                    {
                        name: "YouTube",
                        icon: "./api/apps/5/icon.png",
                        preview: "./api/apps/5/preview.png"
                    },
                    {
                        name: "Settings",
                        icon: "./api/apps/6/icon.png",
                        preview: "./api/apps/6/preview.png"
                    },
                    {
                        name: "Yandex Navigator",
                        icon: "./api/apps/1/icon.png",
                        preview: "./api/apps/1/preview.png"
                    },
                    {
                        name: "Spotify",
                        icon: "./api/apps/3/icon.png",
                        preview: "./api/apps/3/preview.png"
                    },
                    {
                        name: "Telegram",
                        icon: "./api/apps/4/icon.png",
                        preview: "./api/apps/4/preview.png"
                    },
                    {
                        name: "Music",
                        icon: "./api/apps/2/icon.png",
                        preview: "./api/apps/2/preview.png"
                    },
                    {
                        name: "Yandex Navigator",
                        icon: "./api/apps/1/icon.png",
                        preview: "./api/apps/1/preview.png"
                    },
                    {
                        name: "Music",
                        icon: "./api/apps/2/icon.png",
                        preview: "./api/apps/2/preview.png"
                    },
                    {
                        name: "YouTube",
                        icon: "./api/apps/5/icon.png",
                        preview: "./api/apps/5/preview.png"
                    },
                    {
                        name: "YouTube",
                        icon: "./api/apps/5/icon.png",
                        preview: "./api/apps/5/preview.png"
                    },
                    {
                        name: "Settings",
                        icon: "./api/apps/6/icon.png",
                        preview: "./api/apps/6/preview.png"
                    },
                    {
                        name: "Yandex Navigator",
                        icon: "./api/apps/1/icon.png",
                        preview: "./api/apps/1/preview.png"
                    },
                    {
                        name: "Spotify",
                        icon: "./api/apps/3/icon.png",
                        preview: "./api/apps/3/preview.png"
                    },
                    {
                        name: "Telegram",
                        icon: "./api/apps/4/icon.png",
                        preview: "./api/apps/4/preview.png"
                    },
                    {
                        name: "Music",
                        icon: "./api/apps/2/icon.png",
                        preview: "./api/apps/2/preview.png"
                    },
                    {
                        name: "Yandex Navigator",
                        icon: "./api/apps/1/icon.png",
                        preview: "./api/apps/1/preview.png"
                    },
                    {
                        name: "Music",
                        icon: "./api/apps/2/icon.png",
                        preview: "./api/apps/2/preview.png"
                    },
                    {
                        name: "YouTube",
                        icon: "./api/apps/5/icon.png",
                        preview: "./api/apps/5/preview.png"
                    },
                    {
                        name: "Settings",
                        icon: "./api/apps/6/icon.png",
                        preview: "./api/apps/6/preview.png"
                    },
                    {
                        name: "Yandex Navigator",
                        icon: "./api/apps/1/icon.png",
                        preview: "./api/apps/1/preview.png"
                    },
                    {
                        name: "Spotify",
                        icon: "./api/apps/3/icon.png",
                        preview: "./api/apps/3/preview.png"
                    },
                    {
                        name: "Telegram",
                        icon: "./api/apps/4/icon.png",
                        preview: "./api/apps/4/preview.png"
                    },
                    {
                        name: "Music",
                        icon: "./api/apps/2/icon.png",
                        preview: "./api/apps/2/preview.png"
                    },
                    {
                        name: "Yandex Navigator",
                        icon: "./api/apps/1/icon.png",
                        preview: "./api/apps/1/preview.png"
                    },
                    {
                        name: "Music",
                        icon: "./api/apps/2/icon.png",
                        preview: "./api/apps/2/preview.png"
                    },
                    {
                        name: "YouTube",
                        icon: "./api/apps/5/icon.png",
                        preview: "./api/apps/5/preview.png"
                    },
                    {
                        name: "Settings",
                        icon: "./api/apps/6/icon.png",
                        preview: "./api/apps/6/preview.png"
                    },
                    {
                        name: "Yandex Navigator",
                        icon: "./api/apps/1/icon.png",
                        preview: "./api/apps/1/preview.png"
                    },
                    {
                        name: "Spotify",
                        icon: "./api/apps/3/icon.png",
                        preview: "./api/apps/3/preview.png"
                    },
                    {
                        name: "Telegram",
                        icon: "./api/apps/4/icon.png",
                        preview: "./api/apps/4/preview.png"
                    },
                    {
                        name: "Music",
                        icon: "./api/apps/2/icon.png",
                        preview: "./api/apps/2/preview.png"
                    },
                    {
                        name: "Yandex Navigator",
                        icon: "./api/apps/1/icon.png",
                        preview: "./api/apps/1/preview.png"
                    },
                    {
                        name: "Music",
                        icon: "./api/apps/2/icon.png",
                        preview: "./api/apps/2/preview.png"
                    }
                ];
                store.favorites = [
                    {
                        name: "Brawl Stars",
                        icon: "./api/apps/7/icon.png",
                        background: "rgba(255, 190, 32, 0.8)",
                        color: "rgba(0, 0, 0, 0.8)"
                    },
                    {
                        name: "Yandex Navigator",
                        icon: "./api/apps/1/icon.png",
                        preview: "./api/apps/1/preview.png"
                    },
                    {
                        name: "Music",
                        icon: "./api/apps/2/icon.png",
                        preview: "./api/apps/2/preview.png"
                    },
                    {
                        name: "Telegram",
                        icon: "./api/apps/4/icon.png",
                        preview: "./api/apps/4/preview.png"
                    },
                    {
                        name: "Minecraft",
                        icon: "./api/apps/8/icon.png",
                        background: "rgba(125, 187, 77, 0.8)"
                    },
                    {
                        name: "Yandex Navigator",
                        icon: "./api/apps/1/icon.png",
                        preview: "./api/apps/1/preview.png"
                    }
                ];
                store.loaded = true;
            });
        })();
    }, []);

    return (
        <Page className={styles.apps}>
            <Group name="Favorites" apps={favorites} skeleton={!loaded} skeletonAppsCount={6} />
            <Group name="Applications" apps={apps} skeleton={!loaded} skeletonAppsCount={12} />
        </Page>
    );
});

export default AppsPage;
