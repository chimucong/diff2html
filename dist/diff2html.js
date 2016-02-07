	    var diffLines =
	      diffInput.replace(/\\ No newline at end of file/g, '')
	        .split('\n');
	      '     <a class="d2h-file-switch d2h-hide">hide</a>\n' +
	      '     <a class="d2h-file-switch d2h-show">show</a>\n' +
	          '       <td class="d2h-file-name"><a href="#' + printerUtils.getHtmlId(file) + '">' +
	          '&nbsp;' + printerUtils.getDiffName(file) + '</a></td>\n' +
	      if (text.length === 0) {
	        return hash;
	      }
	      if (typeof (config.matchWordsThreshold) !== 'undefined') {
	   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
	   documentation files (the "Software"), to deal in the Software without restriction, including without limitation
	   the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
	   and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
	   THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	   TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	    if (a.length == 0) {
	      return b.length;
	    }
	    if (b.length == 0) {
	      return a.length;
	    }
	    // Increment along the first column of each row
	    // Increment each column in the first row
	          matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // Substitution
	            Math.min(matrix[i][j - 1] + 1, // Insertion
	              matrix[i - 1][j] + 1)); // Deletion
	      if (typeof (cache) === "undefined") {
	      var a1 = a.slice(0, bm.indexA);
	      var b1 = b.slice(0, bm.indexB);
	      var aMatch = [a[bm.indexA]];
	      var bMatch = [b[bm.indexB]];
	      var tailA = bm.indexA + 1;
	      var tailB = bm.indexB + 1;
	      var a2 = a.slice(tailA);
	      var b2 = b.slice(tailB);
	  var SideBySidePrinter = __webpack_require__(23).SideBySidePrinter;
	  HtmlPrinter.prototype.generateSideBySideJsonHtml = function(diffFiles, config) {
	    var sideBySidePrinter = new SideBySidePrinter(config);
	    return sideBySidePrinter.generateSideBySideJsonHtml(diffFiles);
	  };
	  LineByLinePrinter.prototype.makeFileDiffHtml = function(file, diffs) {
	    return '<div id="' + printerUtils.getHtmlId(file) + '" class="d2h-file-wrapper" data-lang="' + file.language + '">\n' +
	      '     <div class="d2h-file-header">\n' +
	      '       <div class="d2h-file-stats">\n' +
	      '         <span class="d2h-lines-added">' +
	      '           <span>+' + file.addedLines + '</span>\n' +
	      '         </span>\n' +
	      '         <span class="d2h-lines-deleted">' +
	      '           <span>-' + file.deletedLines + '</span>\n' +
	      '         </span>\n' +
	      '       </div>\n' +
	      '       <div class="d2h-file-name">' + printerUtils.getDiffName(file) + '</div>\n' +
	      '     </div>\n' +
	      '     <div class="d2h-file-diff">\n' +
	      '       <div class="d2h-code-wrapper">\n' +
	      '         <table class="d2h-diff-table">\n' +
	      '           <tbody class="d2h-diff-tbody">\n' +
	      '         ' + diffs +
	      '           </tbody>\n' +
	      '         </table>\n' +
	      '       </div>\n' +
	      '     </div>\n' +
	      '   </div>\n';
	  };

	    var htmlDiffs = diffFiles.map(function(file) {
	        return that.makeFileDiffHtml(file, diffs);
	      });
	    return '<div class="d2h-wrapper">\n' + htmlDiffs.join('\n') + '</div>\n';
	  LineByLinePrinter.prototype.makeColumnLineNumberHtml = function(block) {
	      return '<tr>\n' +
	  };

	  LineByLinePrinter.prototype._generateFileHtml = function(file) {
	    var that = this;
	    return file.blocks.map(function(block) {
	      var lines = that.makeColumnLineNumberHtml(block);
	  LineByLinePrinter.prototype.makeLineHtml = function(type, oldNumber, newNumber, htmlPrefix, htmlContent) {
	    return '<tr>\n' +
	      '  <td class="d2h-code-linenumber ' + type + '">' +
	      '    <div class="line-num1">' + utils.valueOrEmpty(oldNumber) + '</div>' +
	      '    <div class="line-num2">' + utils.valueOrEmpty(newNumber) + '</div>' +
	      '  </td>\n' +
	      '  <td class="' + type + '">' +
	      '    <div class="d2h-code-line ' + type + '">' + htmlPrefix + htmlContent + '</div>' +
	      '  </td>\n' +
	      '</tr>\n';
	  };

	    return this.makeLineHtml(type, oldNumber, newNumber, htmlPrefix, htmlContent);
	  var matcher = Rematch.rematch(function(a, b) {
	    var amod = a.content.substr(1);
	    var bmod = b.content.substr(1);

	    return Rematch.distance(amod, bmod);
	  });

	  function SideBySidePrinter(config) {
	    this.config = config;
	  SideBySidePrinter.prototype.makeDiffHtml = function(file, diffs) {
	    return '<div id="' + printerUtils.getHtmlId(file) + '" class="d2h-file-wrapper" data-lang="' + file.language + '">\n' +
	      '     <div class="d2h-file-header">\n' +
	      '       <div class="d2h-file-stats">\n' +
	      '         <span class="d2h-lines-added">' +
	      '           <span>+' + file.addedLines + '</span>\n' +
	      '         </span>\n' +
	      '         <span class="d2h-lines-deleted">' +
	      '           <span>-' + file.deletedLines + '</span>\n' +
	      '         </span>\n' +
	      '       </div>\n' +
	      '       <div class="d2h-file-name">' + printerUtils.getDiffName(file) + '</div>\n' +
	      '     </div>\n' +
	      '     <div class="d2h-files-diff">\n' +
	      '       <div class="d2h-file-side-diff">\n' +
	      '         <div class="d2h-code-wrapper">\n' +
	      '           <table class="d2h-diff-table">\n' +
	      '             <tbody class="d2h-diff-tbody">\n' +
	      '           ' + diffs.left +
	      '             </tbody>\n' +
	      '           </table>\n' +
	      '         </div>\n' +
	      '       </div>\n' +
	      '       <div class="d2h-file-side-diff">\n' +
	      '         <div class="d2h-code-wrapper">\n' +
	      '           <table class="d2h-diff-table">\n' +
	      '             <tbody class="d2h-diff-tbody">\n' +
	      '           ' + diffs.right +
	      '             </tbody>\n' +
	      '           </table>\n' +
	      '         </div>\n' +
	      '       </div>\n' +
	      '     </div>\n' +
	      '   </div>\n';
	  };

	  SideBySidePrinter.prototype.generateSideBySideJsonHtml = function(diffFiles) {
	    var that = this;
	          diffs = that.generateSideBySideFileHtml(file);
	          diffs = that.generateEmptyDiff();
	        return that.makeDiffHtml(file, diffs);
	  SideBySidePrinter.prototype.makeSideHtml = function(blockHeader) {
	    return '<tr>\n' +
	      '  <td class="d2h-code-side-linenumber ' + diffParser.LINE_TYPE.INFO + '"></td>\n' +
	      '  <td class="' + diffParser.LINE_TYPE.INFO + '">\n' +
	      '    <div class="d2h-code-side-line ' + diffParser.LINE_TYPE.INFO + '">' + blockHeader + '</div>\n' +
	      '  </td>\n' +
	      '</tr>\n';
	  };
	  SideBySidePrinter.prototype.generateSideBySideFileHtml = function(file) {
	    var that = this;
	      fileHtml.left += that.makeSideHtml(utils.escape(block.header));
	      fileHtml.right += that.makeSideHtml('');
	        var doMatching = that.config.matching === 'lines' || that.config.matching === 'words';
	            that.config.isCombined = file.isCombined;
	            var diff = printerUtils.diffHighlight(oldLine.content, newLine.content, that.config);
	              that.generateSingleLineHtml(deleteType, oldLine.oldNumber,
	              that.generateSingleLineHtml(insertType, newLine.newNumber,
	            var tmpHtml = that.processLines(oldSlice, newSlice);
	        var prefix = line.content[0];
	          fileHtml.left += that.generateSingleLineHtml(line.type, line.oldNumber, escapedLine, prefix);
	          fileHtml.right += that.generateSingleLineHtml(line.type, line.newNumber, escapedLine, prefix);
	          fileHtml.left += that.generateSingleLineHtml(diffParser.LINE_TYPE.CONTEXT, '', '', '');
	          fileHtml.right += that.generateSingleLineHtml(line.type, line.newNumber, escapedLine, prefix);
	  };
	  SideBySidePrinter.prototype.processLines = function(oldLines, newLines) {
	    var that = this;
	        fileHtml.left += that.generateSingleLineHtml(oldLine.type, oldLine.oldNumber, oldContent, oldPrefix);
	        fileHtml.right += that.generateSingleLineHtml(newLine.type, newLine.newNumber, newContent, newPrefix);
	        fileHtml.left += that.generateSingleLineHtml(oldLine.type, oldLine.oldNumber, oldContent, oldPrefix);
	        fileHtml.right += that.generateSingleLineHtml(diffParser.LINE_TYPE.CONTEXT, '', '', '');
	        fileHtml.left += that.generateSingleLineHtml(diffParser.LINE_TYPE.CONTEXT, '', '', '');
	        fileHtml.right += that.generateSingleLineHtml(newLine.type, newLine.newNumber, newContent, newPrefix);
	  };

	  SideBySidePrinter.prototype.makeSingleLineHtml = function(type, number, htmlContent, htmlPrefix) {
	    return '<tr>\n' +
	      '    <td class="d2h-code-side-linenumber ' + type + '">' + number + '</td>\n' +
	      '    <td class="' + type + '">' +
	      '      <div class="d2h-code-side-line ' + type + '">' + htmlPrefix + htmlContent + '</div>' +
	      '    </td>\n' +
	      '  </tr>\n';
	  };
	  SideBySidePrinter.prototype.generateSingleLineHtml = function(type, number, content, prefix) {
	    return this.makeSingleLineHtml(type, number, htmlContent, htmlPrefix);
	  };
	  SideBySidePrinter.prototype.generateEmptyDiff = function() {
	  };
	  module.exports.SideBySidePrinter = SideBySidePrinter;