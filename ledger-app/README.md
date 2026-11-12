# Personal Ledger (build b11)

This build runs entirely from your own files, with nothing downloaded from other sites, so it opens reliably and works offline.

## Uploading it
1. Upload every file in this folder to your GitHub repo (Add file > Upload files), overwriting the old ones, then commit.
2. These old files are no longer used and can be deleted from the repo (harmless if left): `worker.js`, `react-shim.js`, `react-dom-client-shim.js`, `lucide-shim.js`.
3. Wait for Cloudflare to finish deploying, then open your site **twice** (the first visit clears the old cached copy). You should see **b11** at the bottom of the app.
4. On your phone: delete the old home screen icon, then add it again.

## What's new
- **Home tab** with Expenses (monthly total by category), Pantry (fruits, vegetables, bread and more, with +/- counts and a "running low" flag) and Chores (repeat every N days, "Done" button, due/overdue).
- **Sync** now uses Google sign-in (the method from your guide). Until you finish the steps below, the app works on this device only, and the Export/Import buttons still work.

## Turning on sync (Firebase, free)
1. console.firebase.google.com > **Add project** (any name, no Analytics, stay on the free Spark plan).
2. **Build > Authentication > Get started > Google > Enable** > Save.
3. **Authentication > Settings > Authorized domains > Add domain**: `medicoledger.anas-2025000993.workers.dev` (no https://).
4. **Build > Firestore Database > Create**: Standard, `(default)`, a region near you, **Production mode**.
5. In Firestore **Rules**, replace everything with this, then **Publish**:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /ledger/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```
6. Gear icon > **Project settings > Your apps > </>**: nickname anything, leave Hosting **unticked**, choose **script tag**. Copy the `firebaseConfig` values into `fb.js` (replace `null` with the block shown in that file) and upload `fb.js`.
7. Open the app, tap the circular-arrow icon, **Sign in with Google**. Do the same on your other devices.

Each section (Finance, University, Home...) keeps whichever copy was edited most recently, and changes are sent a few seconds after you make them.
