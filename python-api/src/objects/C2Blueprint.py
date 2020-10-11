from flask import Blueprint


class C2Blueprint(Blueprint):
    def add_url_rule(self, rule, view_func=None, **options):
        self.record(lambda s:
                    s.add_url_rule(rule, view_func.__name__, view_func, **options))

    def route(self, rule, **options):
        """Like :meth:`Flask.route` but for a blueprint.  The endpoint for the
        :func:`url_for` function is prefixed with the name of the blueprint.
        """

        def decorator(f):
            endpoint = options.pop("endpoint", f.__name__)
            self.add_url_rule(rule, f, **options)
            return f

        return decorator



