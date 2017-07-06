# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

from redturtle.tiles.management import _
from zope.publisher.interfaces.browser import IDefaultBrowserLayer
from zope.interface import Interface
from zope import schema


class IRedturtleTilesManagementLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""


class IRedturtleTilesManagementView(Interface):
    """Marker interface that defines a tiles management view."""


class ICreatedTile(Interface):
    """Marker interface for tiles. This is used to"""


class IRedturtleTilesManagementSettings(Interface):
    """ """
    enabled_tiles = schema.List(
        title=_(u'enabled_tiles_label',
                default=u'Enabled tiles'),
        description=_(u'enabled_tiles_help',
                      default=u'Select a list of tiles to add.'),
        required=False,
        default=[],
        missing_value=[],
        value_type=schema.Choice(
            vocabulary='tiles.management.vocabularies.RegisteredTiles'
        )
    )
