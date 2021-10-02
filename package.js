Package.describe({
  name: "4fox4:persistent-session",
  version: "1.0.0",
  summary: "Persistently store Session data on the client",
  git: "https://github.com/4fox4/meteor-persistent-session-1",
});

Package.onUse(function (api) {
  api.versionsFrom("2.4"),
    api.use([
      "jquery@1.0.2",
      "amplify@1.0.0",
      "tracker",
      "reactive-dict",
      "session",
      "underscore",
      "ejson",
    ]);
  // If `accounts-base` is loaded, we have to make sure that this package is
  // loaded after `accounts-base` is, so we specify `weak: true` here
  api.use("accounts-base", { weak: true });
  api.addFiles("lib/persistent_session.js", "client");
  api.export("PersistentSession", ["client"]);
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("amplify");
  api.use("random");
  api.use("underscore");
  api.use("reactive-dict"); // we only need this exposed for testing
  api.use("4fox4:persistent-session");

  // expose for derping around in console
  api.export("PersistentSession", ["client"]);
  api.export("ReactiveDict", ["client"]);

  api.addFiles("tests/client/persistent_session.js", "client");
});
