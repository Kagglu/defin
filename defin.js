browser.menus.create({
    id: "spanish",
    title: "Español",
    contexts: ["selection"]
});

browser.menus.create({
    id: "english",
    title: "English",
    contexts: ["selection"]
});

browser.menus.create({
    id: "french",
    title: "Français",
    contexts: ["selection"]
});

browser.menus.create({
    id: "wiktionary",
    title: "all",
    contexts: ["selection"]
})

browser.menus.onClicked.addListener((info, tab) => {
    let input = info.selectionText.toLowerCase()
    switch (info.menuItemId) {
        case "spanish":
            browser.windows.create({
                type: "detached_panel",
                url: ("https://dle.rae.es/" + input),
                width: 600,
                height: 600,
            });
            break;
        case "english":
            browser.windows.create({
                type: "detached_panel",
                url: ("https://www.merriam-webster.com/dictionary/" + input),
                width: 600,
                height: 600,
            });
            break;
        case "french":
            browser.windows.create({
                type: "detached_panel",
                url: ("https://www.cnrtl.fr/definition/" + input),
                width: 1000,
                height: 600,
            });
            break;
        case "wiktionary":
            browser.windows.create({
                type: "detached_panel",
                url: ("https://en.wiktionary.org/wiki/" + input),
                width: 600,
                height: 600,
            });
            break;
    }
});

