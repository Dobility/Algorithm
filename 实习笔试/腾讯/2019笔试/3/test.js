int
main()
{
    int
    i, j, k;
    cin >> n >> m;
    if (n < m * 2) {
        cout << "Error!";
        return 0;
    }
    for (i = 1; i <= n; i++) {
        cin >> a[i];
    }
    l[1] = n;
    r[1] = 2;
    temp.a = a[1];
    temp.x = 1;
    q.push(temp);
    l[n] = n - 1;
    r[n] = 1;
    temp.a = a[n];
    temp.x = n;
    q.push(temp);
    for (i = 2; i < n; i++) {
        l[i] = i - 1;
        r[i] = i + 1;
        temp.a = a[i];
        temp.x = i;
        q.push(temp);
    }
    tot = n;
    for (i = 1; i <= m; i++) {
        tmp = q.top();
        q.pop();
        tp = tmp.x;
        if (mark[tp]) {
            i--;
            continue;
        }

        ans += tmp.a;
        tot++;

        a[tot] = a[l[tp]] + a[r[tp]] - a[tp];
        mark[l[tp]] = mark[r[tp]] = mark[tp] = true;

        r[l[l[tp]]] = l[r[r[tp]]] = tot;
        l[tot] = l[l[tp]];
        r[tot] = r[r[tp]];

        temp.a = a[tot];
        temp.x = tot;
        q.push(temp);
    }
    cout << ans;
}
