import 'package:flutter_filesundefined/index.dart';

class NewsappRepository {
  final NewsappProvider _newsappProvider = NewsappProvider();

  NewsappRepository();

  void test(bool isError) {
    _newsappProvider.test(isError);
  }
}