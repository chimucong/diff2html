  DiffParser.prototype.generateDiffJson = function(diffInput, config) {
    var copyFrom = /^copy from "?(.+)"?/;
    var copyTo = /^copy to "?(.+)"?/;
    var renameFrom = /^rename from "?(.+)"?/;
    var renameTo = /^rename to "?(.+)"?/;
    var index = /^index ([0-9a-z]+)\.\.([0-9a-z]+)\s*(\d{6})?/;
    var combinedIndex = /^index ([0-9a-z]+),([0-9a-z]+)\.\.([0-9a-z]+)/;
    var combinedMode = /^mode (\d{6}),(\d{6})\.\.(\d{6})/;
      } else if (currentFile && !currentFile.oldName && (values = getSrcFilename(line, config))) {
        currentFile.oldName = values;
      } else if (currentFile && !currentFile.newName && (values = getDstFilename(line, config))) {
        currentFile.newName = values;
        currentFile.isDeleted = true;
        currentFile.isNew = true;
        values[3] && (currentFile.mode = values[3]);
        currentFile.isNew = true;
        currentFile.isDeleted = true;
  function getSrcFilename(line, cfg) {
    var prefixes = ["a/", "i/", "w/", "c/", "o/"];

    if (cfg.srcPrefix) {
      prefixes.push(cfg.srcPrefix);
    }

    return _getFilename('---', line, prefixes);
  }

  function getDstFilename(line, cfg) {
    var prefixes = ["b/", "i/", "w/", "c/", "o/"];

    if (cfg.dstPrefix) {
      prefixes.push(cfg.dstPrefix);
    }

    return _getFilename('\\+\\+\\+', line, prefixes);
  }

  function _getFilename(linePrefix, line, prefixes) {
    var FilenameRegExp = new RegExp('^' + linePrefix + ' "?(.+?)"?$');

    var filename;
    var values = FilenameRegExp.exec(line);
    if (values && values[1]) {
      filename = values[1];
      var matchingPrefixes = prefixes.filter(function(p) {
        return filename.indexOf(p) === 0;
      });

      if (matchingPrefixes[0]) {
        // Remove prefix if exists
        filename = filename.slice(matchingPrefixes[0].length);
      }
    }

    return filename;
  }
