from cornice import Service

hello = Service(name='api.hello', path='/ui/hello', description="Simplest app")

@hello.get()
def get_info(request):
    """Returns Hello in JSON."""
    return {'Hello': 'World'}