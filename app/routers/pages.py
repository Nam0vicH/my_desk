from fastapi import APIRouter, Request
from fastapi.templating import Jinja2Templates


router = APIRouter()

templates = Jinja2Templates(directory='app/templates')


@router.get('/')
async def render_homepage(request: Request):
    return templates.TemplateResponse(
        request=request,
        name='index.html'
    )