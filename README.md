# Personal Ledger (build b16)

Live at https://anoose2007ali-ctrl.github.io/ledger-app/ (GitHub Pages + Firebase sync, collection `ledger/{uid}`).

## Updating to b16
1. Before uploading, make sure every device is signed in and shows **Synced** under the page title.
2. Upload the **files inside** this folder (not the folder, not the zip) to the repo with Add file > Upload files, replacing the old ones, then commit.
3. Wait a minute or two, then open the site **twice**. The bottom of the app should say **b16**.
4. Don't delete the home screen icon. A new icon starts with empty storage.
5. Open Settings (gear) > **Download backup** and keep the file somewhere safe, like Google Drive.

## What's new in b16

### Safety
- **Backup and restore:** Settings (gear) > Your data. The backup includes Life, bills and everything else. The weekly review reminds you if your last backup is more than 14 days old.
- **Undo:** after anything is deleted, an "Undo" bar appears for 7 seconds.
- **Sync status:** a line under the page title shows Synced, Saving…, Offline or Not signed in, and the sync button has a coloured dot that matches.

### Routines
- **Recurring tasks:** edit a task and choose Repeat (every day, week, 2 weeks or month). Ticking it creates the next one.
- **Bills and subscriptions:** in Finance. Each bill shows on Today 3 days before it's due. **Paid** logs the expense and moves the bill to its next date. **Skip** moves it without logging anything.
- **Close the day:** a banner on Today after 9 pm, or "Close the day" next to Habits from 5 pm. You tick habits, move unfinished tasks, plan tomorrow and write one line about the day. Finishing ticks the "Plan tomorrow" habit, and your lines show up in the weekly review.

### Studying
- **Study plan:** for each upcoming exam, the unfinished lectures are spread over the days left, and Today shows the lectures to do today and the next step for each. Today's plan stays fixed, so finishing a lecture ticks it off instead of pulling in another.
- **Weak lectures:** in a lecture's sheet, tick "Weak — got it wrong in a quiz". The lecture comes back for revision tomorrow, goes to the top of the study plan, and doesn't count as exam-ready until you untick it.
