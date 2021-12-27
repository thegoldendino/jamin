import isPrimitive from 'just-is-primitive';

export function jaminContentTree(contentDocument) {
  if (!contentDocument) return {};
  const jaminEls = Array.from(contentDocument.querySelectorAll('[data-jamin]'));
  return buildTree(jaminEls);
}

function buildTree(jaminEls = []) {
  console.log('jaminEls', jaminEls);
  const elTree = jaminEls.reduce((tree, el) => {
    const jaminElKey = el.dataset.jamin;
    const scopes = jaminElKey.split('.');
    console.log('scopes', scopes);

    let treeNode = tree;
    scopes.forEach((scope, i) => {
      for (let j = 0; j <= i; j++) {
        if (j === i && treeNode[scope]) {
          treeNode[scope] =
            treeNode[scope] || isPrimitive(treeNode[scope])
              ? [treeNode[scope], el]
              : [...treeNode[scope], el];
        } else {
          treeNode = treeNode[scopes[j]] || {};
        }
      }
    });
    return tree;
  }, {});
  console.log('el Tree', elTree);
  return elTree;
}
