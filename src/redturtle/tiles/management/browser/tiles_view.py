# -*- coding: utf-8 -*-
from plone.app.blocks.interfaces import IBlocksTransformEnabled
from Products.Five import BrowserView
from zope.annotation.interfaces import IAnnotations
from zope.interface import implementer
import json


@implementer(IBlocksTransformEnabled)
class BaseView(BrowserView):
    '''
    '''

    def get_tiles_list(self):
        annotations = IAnnotations(self.context)
        return annotations.get('tiles_list')


class ReorderTilesView(BrowserView):
    '''
    '''

    def __call__(self):
        if not self.request.form.get('tile_ids'):
            return ""
        try:
            sorted_ids = json.loads(self.request.form.get('tile_ids'))
            annotations = IAnnotations(self.context)
            order_dict = {tile_id: index for index, tile_id in enumerate(sorted_ids)}
            annotations['tiles_list'].sort(
                key=lambda x: order_dict[x["tile_id"]])
            return ""
        except ValueError as e:
            return json.dumps({'error': e.message})
