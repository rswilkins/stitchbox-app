// fetch Braze Connection & User data from local browser storage and export as mutable variable across app
export let CurrentConnectionData = JSON.parse(localStorage.getItem("stitchboxBrazeConnection"))
export let CurrentUserData = JSON.parse(localStorage.getItem("stitchboxBrazeUser"))