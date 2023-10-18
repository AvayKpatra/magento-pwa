module.exports = (targets) => {
    targets.of("@magento/venia-ui").routes.tap((routes) => {
      routes.push({
        name: "MFooter",
        pattern: "/footer/:who?",
        path: require.resolve("../components/Footer/footer.js"),
        path: require.resolve("../components/MegaMenu/megaMenuItem.js"),

      });
      return routes;
    });
  };
  