# Ninja Kit

[Apache 2.0 License](LICENSE.md) | [Security Policy](SECURITY.md) | [Code of Conduct](CODE_OF_CONDUCT.md)

## WSL2 LAN access:

```powershell
netsh advfirewall firewall add rule name="Allowing LAN connections" dir=in action=allow protocol=TCP localport=3000
netsh interface portproxy add v4tov4 listenaddress=0.0.0.0 listenport=3000 connectaddress=<ip addr> connectport=3000
```
