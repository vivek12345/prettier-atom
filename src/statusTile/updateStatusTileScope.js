// @flow
const { getCurrentScope } = require('../editorInterface');
const { getAllScopes } = require('../atomInterface');

const updateStatusTileScope = (element: HTMLElement, editor: TextEditor) => {
  if (!element) return;

  // The editor can be undefined if there is no active editor (e.g. closed all tabs).
  // eslint-disable-next-line no-param-reassign
  element.dataset.prettierMatchScope = editor !== undefined &&
    getAllScopes().includes(getCurrentScope(editor))
    ? 'true'
    : 'false';
};

module.exports = updateStatusTileScope;