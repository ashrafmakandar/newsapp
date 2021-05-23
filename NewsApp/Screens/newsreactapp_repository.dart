import 'package:flutter_filesundefined/index.dart';

class NewsreactappRepository {
  final NewsreactappProvider _newsreactappProvider = NewsreactappProvider();

  NewsreactappRepository();

  void test(bool isError) {
    _newsreactappProvider.test(isError);
  }
}