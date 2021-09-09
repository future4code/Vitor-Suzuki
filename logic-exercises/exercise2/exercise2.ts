function checkBrackets(string) {
    var depth = 0;

    for (let i in string) {
        if (string[i] == '(' || string[i] == '[' || string[i] == '{') {
            depth++;
        } else if (string[i] == ')' || string[i] == ']' || string[i] == '}') {
            depth--;
        }

        if (depth < 0) return false;
    }

    if (depth > 0) return false;
    return true;
}