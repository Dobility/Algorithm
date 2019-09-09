function commonParentNode(oNode1, oNode2) {
    for (; oNode1; oNode1 = oNode1.parentNode) {
        if (oNode1.contains(oNode2)) {
            return oNode1;
        }
    }
}
