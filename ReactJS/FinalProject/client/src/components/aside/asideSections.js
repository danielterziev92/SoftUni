import Paths from "../../utils/Paths.js";

export const sections = [
    {
        name: 'Табло',
        listItems: [
            {
                itemTitle: 'Продукти',
                itemHREF: Paths.products,
                itemIClassName: 'fa-solid fa-boxes-stacked',
            },
            {
                itemTitle: 'Групи',
                itemHREF: Paths.groups,
                itemIClassName: 'fa-solid fa-folder-tree',
            },
            // {
            //     itemTitle: 'Продажба',
            //     itemHREF: '/sale',
            //     itemIClassName: 'fa-solid fa-cash-register',
            // },
            // {
            //     itemTitle: "Чат",
            //     itemHREF: "#",
            //     itemIClassName: "fa-solid fa-comments"
            // },
            // {
            //     itemTitle: "Задачи",
            //     itemHREF: "#",
            //     itemIClassName: "fa-regular fa-calendar-days"
            // },
            // {
            //     itemTitle: "Профил",
            //     itemHREF: "#",
            //     itemIClassName: "fa-regular fa-calendar-days"
            // },
        ]
    },
    {
        name: 'Настройки',
        listItems: [
            {
                itemTitle: 'Профил',
                itemHREF: Paths.profile,
                itemIClassName: 'fa-solid fa-circle-user',
            },
            {
                itemTitle: 'Изход',
                itemHREF: Paths.profile,
                itemIClassName: 'fa-solid fa-right-from-bracket',
            }
        ]
    },
]